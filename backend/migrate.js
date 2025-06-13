const axios = require('axios');

const sourceApi = 'http://localhost:1337/api'; // jouw lokale Strapi URL
const targetApi = 'https://strapi-react-production.up.railway.app/api'; // online Strapi URL

// Zet hier je token als je beveiligde API hebt
const sourceToken = ''; // bv. 'Bearer abc123...'
const targetToken = '9df908a02ce1e7d4e74909c7a1d4db9080683cde59a8e7f3902e5b92e0bc93f551fd819cdef1449e6fecb9f672a7848fea4706774d255da34cdc426339ce5f8aebd87cff39b9a480b522070edc41b9f088322944ef0ce0d17180ba522cb8fc62703e75520d7f02435346a0023524341eae488c7d2d30de1603812cffa6dac491'; // bv. 'Bearer xyz789...'

const axiosSource = axios.create({
  baseURL: sourceApi,
  headers: sourceToken ? { Authorization: sourceToken } : {},
});

const axiosTarget = axios.create({
  baseURL: targetApi,
  headers: targetToken ? { Authorization: targetToken } : {},
});

async function migrateCollection(type) {
  try {
    let page = 1;
    const pageSize = 100;
    let more = true;

    while (more) {
      const response = await axiosSource.get(`/${type}`, {
        params: {
          'pagination[page]': page,
          'pagination[pageSize]': pageSize,
          populate: '*', // om components en relations mee te nemen
        },
      });

      const items = response.data.data;

      if (items.length === 0) {
        more = false;
        break;
      }

      for (const item of items) {
        // data object zonder id en meta
        const dataToImport = item.attributes;

        // Post naar target Strapi
        try {
          await axiosTarget.post(`/${type}`, { data: dataToImport });
          console.log(`Geïmporteerd item ${item.id} in ${type}`);
        } catch (err) {
          console.error(`Fout bij import item ${item.id} in ${type}:`, err.response?.data || err.message);
        }
      }
      page++;
    }
  } catch (err) {
    console.error(`Fout bij ophalen van ${type}:`, err.response?.data || err.message);
  }
}

async function migrateSingle(type) {
  try {
    const response = await axiosSource.get(`/${type}?populate=*`);

    const dataToImport = response.data.data.attributes;

    try {
      // Check of single type bestaat op target met GET, anders POST
      const exists = await axiosTarget.get(`/${type}`);

      // update via PUT
      await axiosTarget.put(`/${type}`, { data: dataToImport });
      console.log(`Single type ${type} geüpdatet`);
    } catch {
      // niet gevonden => POST
      await axiosTarget.post(`/${type}`, { data: dataToImport });
      console.log(`Single type ${type} aangemaakt`);
    }
  } catch (err) {
    console.error(`Fout bij migratie single type ${type}:`, err.response?.data || err.message);
  }
}

async function run() {
  // Collection types
  await migrateCollection('projects');
  await migrateCollection('users');

  // Single types
  await migrateSingle('home');

  // Componenten zitten meestal in collections, maar als je blocks_text als collection hebt:
  await migrateCollection('blocks-text');

  console.log('Migratie klaar');
}

run();
