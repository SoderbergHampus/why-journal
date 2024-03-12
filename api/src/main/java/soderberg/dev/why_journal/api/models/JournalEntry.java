package soderberg.dev.why_journal.api.models;

import jakarta.persistence.*;

import java.util.Objects;
import java.util.UUID;

@Entity
public class JournalEntry {
    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String date;

    @Column
    private String issue;

    @Column(name = "issue_score")
    private int issueScore;

    @Column
    private String parameters;

    @Column(name = "parameter_scores")
    private String parameterScores;

    // Constructors
    public JournalEntry() {}

    public JournalEntry(String date,
                        String issue,
                        int issueScore,
                        String parameters,
                        String parameterScores) {
        this.date = date;
        this.issue = issue;
        this.issueScore = issueScore;
        this.parameters = parameters;
        this.parameterScores = parameterScores;
    }

    // Getters & Setters
    public UUID getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public int getIssueScore() {
        return issueScore;
    }

    public void setIssueScore(int issueScore) {
        this.issueScore = issueScore;
    }

    public String getParameters() {
        return parameters;
    }

    public void setParameters(String parameters) {
        this.parameters = parameters;
    }

    public String getParameterScores() {
        return parameterScores;
    }

    public void setParameterScores(String parameterScores) {
        this.parameterScores = parameterScores;
    }

    // Equals, hash, toString

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        JournalEntry journalEntry = (JournalEntry) o;
        return issueScore == journalEntry.issueScore && Objects.equals(id, journalEntry.id) &&
                Objects.equals(date, journalEntry.date) &&
                Objects.equals(issue, journalEntry.issue) &&
                Objects.equals(parameters, journalEntry.parameters) &&
                Objects.equals(parameterScores, journalEntry.parameterScores);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, issue, issueScore, parameters, parameterScores);
    }

    @Override
    public String toString() {
        return "Entry{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", issue='" + issue + '\'' +
                ", issueScore=" + issueScore +
                ", parameters='" + parameters + '\'' +
                ", parameterScores='" + parameterScores + '\'' +
                '}';
    }
}
