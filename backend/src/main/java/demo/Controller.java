package demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping("/ping")
    public ResponseEntity<Boolean> index() {
        return ResponseEntity.ok(true);
    }
}
