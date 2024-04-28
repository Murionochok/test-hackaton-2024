using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_hack.Migrations
{
    /// <inheritdoc />
    public partial class requestRenames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Urgency",
                table: "Requests");

            migrationBuilder.RenameColumn(
                name: "UserPhone",
                table: "Requests",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Requests",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Requests",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "Deadline",
                table: "Requests",
                newName: "Date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Requests",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Requests",
                newName: "UserPhone");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Requests",
                newName: "Deadline");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Requests",
                newName: "Location");

            migrationBuilder.AddColumn<bool>(
                name: "Urgency",
                table: "Requests",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
