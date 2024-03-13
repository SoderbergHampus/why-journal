package soderberg.dev.why_journal.api.models;

import java.util.ArrayList;
import java.util.List;

public record EntryDTO(int id,
                       String date,
                       TrackedData issue,
                       List<TrackedData> parameters,
                       String journalEntry) {

    public static EntryDTO fromEntry(Entry entry) {
        TrackedData issueDTO = new TrackedData(entry.getIssue(), entry.getIssueScore());
        List<String> parameterNamesDTO = entry.getParameters();
        List<Integer> parameterScoresDTO = entry.getParameterScores();
        List<TrackedData> parameterDTO = new ArrayList<>();
        for (int i = 0; i < parameterNamesDTO.size(); i++) {
            parameterDTO.add(new TrackedData(parameterNamesDTO.get(i), parameterScoresDTO.get(i)));
        }
        return new EntryDTO(
                entry.getId(),
                entry.getDate(),
                issueDTO,
                parameterDTO,
                entry.getJournalEntry()
        );
    }

    public static Entry toEntry(EntryDTO dto) {
        List<String> parameterNames = new ArrayList<>();
        List<Integer> parameterScores = new ArrayList<>();
        dto.parameters.forEach(el -> {
            parameterNames.add(el.name());
            parameterScores.add(el.score());
        });

        Entry entry = new Entry();
        entry.setDate(dto.date());
        entry.setIssue(dto.issue().name());
        entry.setIssueScore(dto.issue().score());
        entry.setParameters(parameterNames);
        entry.setParameterScores(parameterScores);
        entry.setJournalEntry(dto.journalEntry());

        return entry;
    }

}
