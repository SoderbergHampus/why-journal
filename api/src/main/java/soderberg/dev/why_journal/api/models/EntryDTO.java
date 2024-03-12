package soderberg.dev.why_journal.api.models;

import java.util.List;

public record EntryDTO(int id,
                       String date,
                       String issue,
                       int issueScore,
                       List<String> parameters,
                       List<Integer> parameterScores) {

    public static EntryDTO fromEntry(Entry entry) {
        return new EntryDTO(
                entry.getId(),
                entry.getDate(),
                entry.getIssue(),
                entry.getIssueScore(),
                entry.getParameters(),
                entry.getParameterScores()
        );
    }

    public static Entry toEntry(EntryDTO dto) {
        Entry entry = new Entry();
        entry.setDate(dto.date());
        entry.setIssue(dto.issue());
        entry.setIssueScore(dto.issueScore());
        entry.setParameters(dto.parameters);
        entry.setParameterScores(dto.parameterScores);

        return entry;
    }

}
