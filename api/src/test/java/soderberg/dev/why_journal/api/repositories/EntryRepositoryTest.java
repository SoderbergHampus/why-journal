package soderberg.dev.why_journal.api.repositories;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class EntryRepositoryTest {

    @Autowired
    private EntryRepository repo;

    @Test
    void shouldReturn3Entries() {
        int expected = 3;
        int actual = repo.findAll().size();

        assertEquals(expected, actual);
    }
}