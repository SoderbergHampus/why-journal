package soderberg.dev.why_journal.api.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "entry")
public class Entry {
    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

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
    public Entry() {}

    public Entry(String date,
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
    public int getId() {
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

    public List<String> getParameters() {
        return List.of(parameters.split(","));
    }

    public void setParameters(List<String> parameters) {
        this.parameters = String.join(",", parameters);
    }

    public List<Integer> getParameterScores() {
        List<String> listScores = List.of(parameterScores.split(","));
        return listScores.stream()
                .map(Integer::parseInt)
                .toList();
    }

    public void setParameterScores(List<Integer> parameterScores) {
        List<String> stringList = parameterScores.stream()
                .map(String::valueOf)
                .toList();
        this.parameterScores = String.join(",", stringList);
    }

    // Equals, hash, toString

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Entry entry = (Entry) o;
        return issueScore == entry.issueScore && Objects.equals(id, entry.id) &&
                Objects.equals(date, entry.date) &&
                Objects.equals(issue, entry.issue) &&
                Objects.equals(parameters, entry.parameters) &&
                Objects.equals(parameterScores, entry.parameterScores);
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
