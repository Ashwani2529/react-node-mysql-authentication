SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Table structure for table `users`
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL UNIQUE,
  `email` varchar(500) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert dummy users
INSERT INTO `users` (`username`, `email`, `password`) VALUES
('Ashwani', 'ashwani@gmail.com', '$2a$10$7tWx8/mt0mkYo4Fqg2dsQeuj5xv1cPiHiqR5ot6m.UdVwjRIK5Hmq'), -- password: password123
('Prashant', 'prashant@gmail.com', '$2a$10$WZKE89nUu8Vve5PK6qlwUePBtY2h4G3eV2PWh1g8v1p6qQ7/OhPcK'), -- password: securepassword
('Yash', 'yash@gmail.com', '$2a$10$jlNlr0NPPyL2AIFjZQGg.eIAPN1D.zmZbh0tp3HeG2PBwEb/KNxEa'); -- password: mypassword

-- Commit the transaction
COMMIT;