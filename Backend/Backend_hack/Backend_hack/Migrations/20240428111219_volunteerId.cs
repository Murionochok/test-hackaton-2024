using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_hack.Migrations
{
    /// <inheritdoc />
    public partial class volunteerId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VolunteerInfos_AspNetUsers_VolunteerEmail",
                table: "VolunteerInfos");

            migrationBuilder.RenameColumn(
                name: "VolunteerEmail",
                table: "VolunteerInfos",
                newName: "VolunteerID");

            migrationBuilder.RenameIndex(
                name: "IX_VolunteerInfos_VolunteerEmail",
                table: "VolunteerInfos",
                newName: "IX_VolunteerInfos_VolunteerID");

            migrationBuilder.AddForeignKey(
                name: "FK_VolunteerInfos_AspNetUsers_VolunteerID",
                table: "VolunteerInfos",
                column: "VolunteerID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VolunteerInfos_AspNetUsers_VolunteerID",
                table: "VolunteerInfos");

            migrationBuilder.RenameColumn(
                name: "VolunteerID",
                table: "VolunteerInfos",
                newName: "VolunteerEmail");

            migrationBuilder.RenameIndex(
                name: "IX_VolunteerInfos_VolunteerID",
                table: "VolunteerInfos",
                newName: "IX_VolunteerInfos_VolunteerEmail");

            migrationBuilder.AddForeignKey(
                name: "FK_VolunteerInfos_AspNetUsers_VolunteerEmail",
                table: "VolunteerInfos",
                column: "VolunteerEmail",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
