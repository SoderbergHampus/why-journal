package soderberg.dev.why_journal.api.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import soderberg.dev.why_journal.api.models.Entry;

import java.util.ArrayList;
import java.util.List;

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

    @Test
    void shouldHave3Parameters() {
        int expected = 3;
        Entry entry = service.getEntry(1).orElseThrow();
        int actual = entry.getParameters().size();

        assertEquals(expected, actual);
    }

    @Test
    void shouldHaveCorrectIssue() {
        String expected = "headache";
        Entry entry = service.getEntry(1).orElseThrow();
        String actual = entry.getIssue();

        assertEquals(expected, actual);
    }

    @Test
    void shouldHaveCorrectIssueScore() {
        int expected = 60;
        Entry entry = service.getEntry(1).orElseThrow();
        int actual = entry.getIssueScore();

        assertEquals(expected, actual);
    }

    @Test
    void shouldHaveCorrectParameters() {
        List<String> expected = new ArrayList<>();
        expected.add("sleep");
        expected.add("diet");
        expected.add("stress");
        Entry entry = service.getEntry(1).orElseThrow();
        List<String> actual = entry.getParameters();

        assertEquals(expected, actual);
    }

    @Test
    void shouldHaveCorrectParameterScores() {
        List<Integer> expected = new ArrayList<>();
        expected.add(60);
        expected.add(20);
        expected.add(40);
        Entry entry = service.getEntry(1).orElseThrow();
        List<Integer> actual = entry.getParameterScores();

        assertEquals(expected, actual);
    }

}