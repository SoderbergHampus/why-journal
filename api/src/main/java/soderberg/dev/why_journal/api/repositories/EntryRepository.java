package soderberg.dev.why_journal.api.repositories;

import org.springframework.data.repository.ListCrudRepository;
import soderberg.dev.why_journal.api.models.JournalEntry;

import java.util.UUID;

public interface EntryRepository extends ListCrudRepository<JournalEntry, UUID> {
}
