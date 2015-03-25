<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class KandidatenDAO extends DAO {
    
  public function selectAll() {
    $sql = "SELECT * 
    				FROM `kandidaten`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }    

	public function selectById($id) {
		$sql = "SELECT * 
						FROM `kandidaten` 
						WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}	


	public function insert($data) {
		$sql = "INSERT INTO `komen_opstaan`.`kandidaten` (`voornaam`, `achternaam`, `adres`, `groep_id`, `image`) 
				VALUES (:voornaam, :achternaam, :adres, :groep_id, :image);";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':voornaam', $data['voornaam']);
		$stmt->bindValue(':achternaam', $data['achternaam']);
		$stmt->bindValue(':adres', $data['adres']);
		$stmt->bindValue(':groep_id', $data['groep_id']);
		$stmt->bindValue(':image', $data['image']);
		if($stmt->execute()) {
			$insertedId = $this->pdo->lastInsertId();
			return $this->selectById($insertedId);
		}
		return false;
	}


}