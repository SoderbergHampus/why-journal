package soderberg.dev.why_journal.api.service;

import org.springframework.stereotype.Service;
import soderberg.dev.why_journal.api.models.Entry;
import soderberg.dev.why_journal.api.repositories.EntryRepository;

import java.util.List;

@Service
public class WhyJournalService {

    private final EntryRepository entryRepo;

    public WhyJournalService(EntryRepository entryRepo) {
        this.entryRepo = entryRepo;
    }

    public List<Entry> getEntries() {
        return entryRepo.findAll();
    }
}
