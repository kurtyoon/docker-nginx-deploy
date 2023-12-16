package demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping("/ping")
    public ResponseEntity<String> index() {
        return ResponseEntity.ok("서버에 정상적으로 연결되었습니다.");
    }
}
