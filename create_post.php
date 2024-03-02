 <?php
 include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['title']) && isset($data['body'])) {
        $title = $data['title'];
        $body = $data['body'];

        if(strlen($title) > 255) {
            echo "Title Too Large";
        } else if(str_word_count($body) > 1000 || strlen($body) > 8000) {
            echo "Body Too Large";
        } else {
            try {
                $data = json_decode($json, true);
                $sql = "INSERT INTO posts (title, body) VALUES (:title, :body)";
                error_log($sql);
                $stmt = $conn->prepare($sql);
                $stmt->execute(['title' => $title, 'body' => $body]);
                echo "Post successful!";
            } catch (Exception $e) {
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }
        }
    } else {
        echo "Title and body are required.";
    }
}
