import{test} from '@playwright/test'
const excel=  require('exceljs');

test('Excel run', async()=>{

   const workbook= new excel.Workbook();
   await workbook.xlsx.readFile("C:\Users\Administrator\Downloads\download.xlsx");
   const worksheet = workbook.getWorksheet('sheet1');
    worksheet.eachRow((row,rownumber) => 
        {
        row.eachCell((cell,colnumber) =>
            {
                console.log(cell.value);
                
        })
    })


});
