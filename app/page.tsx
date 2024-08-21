import { Combobox } from "@/components/ui/combobox";
import { getTableMetaData, listTables, scanAllItems } from "./services/data";
import { capitalize } from "@/lib/utils";
import { DataTableDemo, TTable } from "./views/home/data-table";
import omit from "lodash.omit";

type TSearchParams = { [key: string]: string | undefined };
type TPageProps = {
  searchParams?: TSearchParams;
};
export default async function Home({ searchParams }: TPageProps) {
  const tables = await listTables();
  // get table name params from url for next time.
  const tableName = searchParams?.table || tables.TableNames?.[0];
  const tableMetadata = await getTableMetaData(tableName);

  const tableStructure = tables.TableNames?.map((tableName) => ({
    value: tableName,
    label: capitalize(tableName) + ` [${tableName}]`,
  }));

  // Table Name will be taken from the url params.
  const tableData = await scanAllItems(tableName);
  const requiredColumns = tableMetadata?.Table?.AttributeDefinitions?.map(
    (key) => ({
      value: key.AttributeName || "",
      label: key.AttributeName || "",
      type: key.AttributeType || "",
      keyType:
        tableMetadata?.Table?.KeySchema?.find(
          (s) => s.AttributeName === key.AttributeName
        )?.KeyType || "",
    })
  );

  const idColumn = requiredColumns?.find((key) => key.keyType === "HASH");

  const structuredData: TTable[] =
    tableData?.Items?.map((item) => {
      if (!idColumn) {
        return {} as TTable;
      }
      const tableItem: TTable = {
        id: item[idColumn.value]?.[idColumn.type === "S" ? "S" : "N"],
      } as TTable;

      requiredColumns?.forEach((key) => {
        if (item[key.value]) {
          tableItem[key.value] = item[key.value]?.[key.type as "S" | "N"];
        }
      });

      const otherFields = omit(
        item,
        requiredColumns?.map((key) => key.value) || []
      );
      tableItem.data = otherFields;

      return tableItem;
    }) || ([] as TTable[]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {tableStructure && tableStructure?.length > 0 ? (
          <Combobox items={tableStructure} selectedItem={tableName} />
        ) : null}
        <DataTableDemo
          requiredColumns={requiredColumns}
          data={structuredData}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="nothing">Footer</a>
      </footer>
    </div>
  );
}
