package soderberg.dev.why_journal.api.models;

import java.util.List;

public record EntryRequestDTO(String date,
                              String issue,
                              int issueScore,
                              List<String> parameters,
                              List<Integer> parameterScores) {
}
