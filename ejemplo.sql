--1er punto
select * from EMPLEADOS where nombre like '%Julia %'

julia hernandez 10
maria julia arias 15
julia andrea pardo 25
juliana alvarez 45

--2do punto
select e.*, e1.numemp AS numJefe, e1.nombre AS nomJefe, e1.cuota AS ctJefe
  from EMPLEADOS AS e
    inner join  EMPLEADOS AS e1 on e.jefe = e1.numemp
where e.cuota > e1.cuota

--3er punto
select SUM(e.cuota) AS sum_cuota, of.*
  from EMPLEADOS AS e
    inner join OFICINAS AS of on  e.oficina = of.oficina
    where of.objetivo > (
                    select SUM(e1.cuota) from EMPLEADOS AS e1
                    where e1.oficina = of.oficina
                    )
group by e.oficina, of.*



--ej leo
select
	SUM(CHAR_LENGTH(m.municipio )) as sum_cuota,
		d.departamento as oficina,
		CHAR_LENGTH(d.departamento) as objetivo
from geo.municipios m --empleado
inner join geo.departamentos as d on m.departamento = d.coddpto --ofc
where
CHAR_LENGTH(d.departamento) --objetivo
	= (
		select SUM(CHAR_LENGTH(m1.municipio)) --sum_cuota
		from geo.municipios m1  --empleados
		where
			m1.departamento --cod ofc del empleado (m1) =>fk
				=
			d.coddpto  -- = id ofc (d)=>pk
		)
group by m.departamen

--4to punto
UPDATE
UPDATE EMPLEADOS
SET Oficina = 21
WHERE Oficina = 30

--5to punto

CREATE TABLE OFICINAS(
   oficina int auto_incremet,
   nombre varchar (30),
   ciudad varchar (20),
   region varchar (20),
   direccion varchar (40),
   obj_ventas int (10),
   ventas int (20),
   PRIMARY KEY(oficina)
);
