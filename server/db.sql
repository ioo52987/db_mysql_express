--CREATE DATABASE samples;

CREATE TABLE samples.ngs_samples (
    id int NOT NULL AUTO_INCREMENT,
    accession_id varchar(50),
    sample_year int,
    sample_type varchar(50),
    PRIMARY KEY (id)
);  

INSERT INTO samples.ngs_samples (accession_id, sample_year, sample_type)
VALUES
('2018_vcuMI_000001',2018,'vaginal'),
('2019_vcuMI_000004',2019,'flu'),
('2019_vcuMI_000005',2019,'flu'),
('2020_vcuMI_000002',2020,'vaginal'),
('2022_vcuMI_000003',2022,'flu');