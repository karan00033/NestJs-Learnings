export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}
export const data: Data = {
    report: [
        {
          id: "uuid1",
          source: "salary",
          amount: 7500,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.INCOME
        },
        {
          id: "uuid2",
          source: "investment",
          amount: 12000,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.INCOME
        },
        {
          id: "uuid3",
          source: "rent",
          amount: 3000,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.EXPENSE
        },
        {
          id: "uuid4",
          source: "dividend",
          amount: 500,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.INCOME
        },
        {
          id: "uuid5",
          source: "bonus",
          amount: 1000,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.INCOME
        },
        {
          id: "uuid6",
          source: "groceries",
          amount: 200,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.EXPENSE
        },
        {
          id: "uuid7",
          source: "gift",
          amount: 50,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.EXPENSE
        },
        {
          id: "uuid8",
          source: "interest",
          amount: 300,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.INCOME
        },
        {
          id: "uuid9",
          source: "travel",
          amount: 800,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.EXPENSE
        },
        {
          id: "uuid10",
          source: "commission",
          amount: 250,
          created_at: new Date(),
          updated_at: new Date(),
          type: ReportType.INCOME
        }
      ]
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType
    }[]

}


// data.report.push({
//     id: "uuid",
//     source: "salary",
//     amount: 7500,
//     created_at: new Date(),
//     updated_at: new Date(),
//     type: ReportType.INCOME
// })