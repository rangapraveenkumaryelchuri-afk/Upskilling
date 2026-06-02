
USE community_portal;

INSERT INTO Users(full_name,email,city,registration_date)
VALUES
('Alice Johnson','alice@example.com','New York','2024-12-01'),
('Bob Smith','bob@example.com','Los Angeles','2024-12-05');

INSERT INTO Events(title,description,city,start_date,end_date,status,organizer_id)
VALUES
('Tech Meetup','Tech Event','New York','2026-06-10 10:00:00','2026-06-10 16:00:00','upcoming',1);

INSERT INTO Registrations(user_id,event_id,registration_date)
VALUES
(1,1,'2026-05-01');
