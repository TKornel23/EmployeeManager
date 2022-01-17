using api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("employee")]
    public class EmployeeController : Controller
    {
        private EmployeeDbContext _ctx;

        public EmployeeController(EmployeeDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            return Ok(await _ctx.Employees.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Details(int id)
        {
            return Ok(await _ctx.Employees.FirstOrDefaultAsync(x =>x.Id == id));
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Employee employee)
        {
            if(ModelState.IsValid)
            {
                await _ctx.Employees.AddAsync(employee);
                await _ctx.SaveChangesAsync();
                return Ok(employee);
            }
            return BadRequest("employee media is not supported");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            Employee employee = await _ctx.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if(employee is null)
            {
                return BadRequest();
            }
            else
            {
                _ctx.Employees.Remove(employee);
                await _ctx.SaveChangesAsync();
                return Ok(employee);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id,[FromBody] Employee employee)
        {
            Employee empToUpd = await _ctx.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if(empToUpd is not null)
            {
                empToUpd.Email = employee.Email;
                empToUpd.Name = employee.Name;
                empToUpd.Zip = employee.Zip;
                empToUpd.Gender = employee.Gender;
                empToUpd.BirthDate = employee.BirthDate;
                empToUpd.City = employee.City;
                await _ctx.SaveChangesAsync();
                return Ok(employee);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
