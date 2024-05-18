-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "born_date" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contract_type" TEXT NOT NULL
);
INSERT INTO "new_Employees" ("born_date", "contract_type", "department", "email", "id", "job_title", "name", "national_id", "nationality", "phone_number", "start_date") SELECT "born_date", "contract_type", "department", "email", "id", "job_title", "name", "national_id", "nationality", "phone_number", "start_date" FROM "Employees";
DROP TABLE "Employees";
ALTER TABLE "new_Employees" RENAME TO "Employees";
CREATE UNIQUE INDEX "Employees_phone_number_key" ON "Employees"("phone_number");
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");
PRAGMA foreign_key_check("Employees");
PRAGMA foreign_keys=ON;
