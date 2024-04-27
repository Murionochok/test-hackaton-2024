using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_hack.Migrations
{
    /// <inheritdoc />
    public partial class vounteerInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VolunteerInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VolunteerEmail = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ShortInfo = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    formFile = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VolunteerInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VolunteerInfos_AspNetUsers_VolunteerEmail",
                        column: x => x.VolunteerEmail,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_VolunteerInfos_VolunteerEmail",
                table: "VolunteerInfos",
                column: "VolunteerEmail");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VolunteerInfos");
        }
    }
}
