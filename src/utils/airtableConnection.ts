const Airtable = require('airtable')



Airtable.configure({
    apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base(process.env.AIRTABLE_BASE)

const table = base('projects')


const minifyItems = (records: any) =>
  records.map((record: any) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record: any) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyItems, getMinifiedItem };