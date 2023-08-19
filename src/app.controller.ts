import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from 'src/data';
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
  getIncomeReportById() {
    return {};
  }
  @Post()
  createIncomeReport() {
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
