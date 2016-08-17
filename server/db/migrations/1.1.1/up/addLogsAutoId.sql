begin;

alter table logs
alter column id set default nextval('logs_id_seq');

end;

