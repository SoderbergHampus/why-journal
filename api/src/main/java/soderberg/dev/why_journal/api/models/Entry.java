package soderberg.dev.why_journal.api.models;

import jakarta.persistence.*;

import java.util.Objects;
import java.util.UUID;

@Entity
public class Entry {
    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String date;

    @Column(name = "issue_score")
    private int issueScore;

    // Constructors
    public Entry() {}

    public Entry(String date, int issueScore) {
        this.date = date;
        this.issueScore = issueScore;
    }

    // Getters
    public UUID getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public int getIssueScore() {
        return issueScore;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setIssueScore(int issueScore) {
        this.issueScore = issueScore;
    }

    // Equals, hash, string

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Entry entry = (Entry) o;
        return issueScore == entry.issueScore && Objects.equals(id, entry.id) &&
                Objects.equals(date, entry.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, issueScore);
    }

    @Override
    public String toString() {
        return "Entry{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", issueScore=" + issueScore +
                '}';
    }

}
