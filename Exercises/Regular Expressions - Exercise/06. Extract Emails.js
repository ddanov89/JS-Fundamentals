function extractEmails(input) {
    let text = input[0];
    let pattern = /(?:^| )([a-z][a-z0-9\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+){1,})/g;
    let matches = text.match(pattern);
    if (matches != null) {
        for (let match of matches) {
            console.log(match.trim());
        }
    }
}
extractEmails('Please contact us at: support@github.com.');
// extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
// extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class.- steve.parker@softuni.de.');