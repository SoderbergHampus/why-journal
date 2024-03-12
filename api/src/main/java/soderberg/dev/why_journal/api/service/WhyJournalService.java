package soderberg.dev.why_journal.api.service;

import org.springframework.stereotype.Service;
import soderberg.dev.why_journal.api.models.Entry;
import soderberg.dev.why_journal.api.repositories.EntryRepository;

import java.util.List;

@Service
public class WhyJournalService {

    private final EntryRepository repo;

    public WhyJournalService(EntryRepository repo) {
        this.repo = repo;
    }

    public List<Entry> getEntries() {
        return repo.findAll();
    }

    public Entry getEntry(int id) {
        return repo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Entry id not found"));
    }

    public Entry addEntry(Entry entry) {
        return repo.save(entry);
    }
}
