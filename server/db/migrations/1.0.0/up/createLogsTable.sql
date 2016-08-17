BEGIN;

CREATE TABLE logs (
  id integer not null,
  message varchar(255),
  created date default now()
);

ALTER TABLE logs ADD PRIMARY KEY (id);

CREATE SEQUENCE logs_id_seq
START WITH 1
INCREMENT BY 1
NO MINVALUE
NO MAXVALUE
CACHE 1;

END;
