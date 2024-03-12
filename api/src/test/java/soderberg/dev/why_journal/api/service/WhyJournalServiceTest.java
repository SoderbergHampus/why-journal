package soderberg.dev.why_journal.api.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class WhyJournalServiceTest {

    @Autowired
    private WhyJournalService service;

    @Test
    void shouldReturn3entries() {
        int expected = 3;
        int actual = service.getEntries().size();

        assertEquals(expected, actual);
    }
}