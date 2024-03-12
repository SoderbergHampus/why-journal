package soderberg.dev.why_journal.api.repositories;

import org.springframework.data.repository.ListCrudRepository;
import soderberg.dev.why_journal.api.models.Entry;

public interface EntryRepository extends ListCrudRepository<Entry, Integer> {
}
