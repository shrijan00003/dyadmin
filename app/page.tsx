import { Combobox } from "@/components/ui/combobox";
import { listTables, scanAllItems } from "./services/data";
import { capitalize } from "@/lib/utils";
import { DataTableDemo } from "./views/home/data-table";

export default async function Home() {
  const tables = await listTables();

  const tableStructure = tables.TableNames?.map((tableName) => ({
    value: tableName,
    label: capitalize(tableName) + ` [${tableName}]`,
  }));

  const firstTableData = await scanAllItems(tableStructure?.[0].value);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {tableStructure && tableStructure?.length > 0 ? (
          <Combobox
            items={tableStructure}
            selectedItem={tableStructure?.[0].value}
          />
        ) : null}
        <DataTableDemo />
        <code>{JSON.stringify(firstTableData)}</code>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="nothing">Footer</a>
      </footer>
    </div>
  );
}
