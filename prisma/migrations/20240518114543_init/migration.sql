-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "born_date" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "contract_type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_phone_number_key" ON "Employees"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");
