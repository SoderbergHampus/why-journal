package soderberg.dev.why_journal.api.controllers;

import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import soderberg.dev.why_journal.api.models.Entry;
import soderberg.dev.why_journal.api.models.EntryDTO;
import soderberg.dev.why_journal.api.service.WhyJournalService;

import java.util.List;

@Controller
@RequestMapping("/api/journalEntries")
@CrossOrigin
public class whyJournalController {

    private final WhyJournalService service;

    public whyJournalController(WhyJournalService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<EntryDTO>> getEntries() {
        List<Entry> entries = service.getEntries();
        List<EntryDTO> entryDTOs = entries.stream().map(EntryDTO::fromEntry).toList();
        return ResponseEntity.ok(entryDTOs);
    }

    @PostMapping
    public ResponseEntity<EntryDTO> addEntry(RequestEntity<EntryDTO> request) {
        if (request.getBody() != null) {
            Entry entry = EntryDTO.toEntry(request.getBody());
            return ResponseEntity.accepted().body(EntryDTO.fromEntry(service.addEntry(entry)));
        } else {
            throw new IllegalArgumentException("Empty POST request");
        }
    }
}
