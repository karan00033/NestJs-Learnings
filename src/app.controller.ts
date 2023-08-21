import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuid } from "uuid";
// Creating a new controller entity

// Every single entity inside a nestjs is a class
@Controller('report/:type')
export class AppController {
  @Get('')

  // Here we are extracting type parameter from request body and assigning to type variable
  getAllIncomeReports1(@Param('type') type: string) {

    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getIncomeReportById(@Param('type') type: string, @Param('id') id: string) {
    console.log({
      type,
      id
    });
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType).find((report) => report.id === id);
  }
  @Post()
  createIncomeReport(
    @Body() body: {
      amount: number,
      source: string
    },
    @Param('type') type: string
  ) {
    // console.log({
    //   body
    // });
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
    }
    return 'Created';
  }

  @Put(':id')
  updateIncomeReportById() {
    return 'Updated';
  }

  @Delete(':id')
  DeleteIncomeReportById() {
    return 'Deleted';
  }
}

//http://localhost:3000/ + report/income

// http://localhost:3000/ + report/expense
