import { getTableMetaData, listTables, scanAllItems } from "./services/data";

export default async function Home() {
  const data = await scanAllItems();
  const tableMetaData = await getTableMetaData();
  const tables = await listTables();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>List of Tables</h2>
        <code>{JSON.stringify(tables)}</code>
        <h1 className="text-4xl font-bold">Table Meta Data</h1>
        <code>{JSON.stringify(tableMetaData)}</code>
        <h1 className="text-4xl font-bold">Data Here</h1>
        <code>{JSON.stringify(data)}</code>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="nothing">Footer</a>
      </footer>
    </div>
  );
}
