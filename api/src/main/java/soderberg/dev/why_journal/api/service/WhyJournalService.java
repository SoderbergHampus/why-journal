package soderberg.dev.why_journal.api.service;

import org.springframework.stereotype.Service;
import soderberg.dev.why_journal.api.models.Entry;
import soderberg.dev.why_journal.api.repositories.EntryRepository;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

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
        List<Entry> entries = getEntries();
        AtomicInteger existingId = new AtomicInteger(-1);
        entries.forEach(en -> {
            if (en.getDate().equals(entry.getDate())) {
                existingId.set(en.getId());
            }
        });
        int id = existingId.get();

        if (id == -1) {
            return repo.save(entry);
        }

        entry.setId(id);
        return repo.save(entry);
    }

    private Entry updateEntry(Entry old, Entry update) {
        old.setDate(update.getDate());
        old.setIssue(update.getIssue());
        old.setIssueScore(update.getIssueScore());
        old.setParameters(update.getParameters());
        old.setParameterScores(update.getParameterScores());
        old.setJournalEntry(update.getJournalEntry());
        return repo.save(old);
    }
}
