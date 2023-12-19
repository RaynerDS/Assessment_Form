document.getElementById('evaluationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var studentName = document.getElementById('studentName').value;
    var studentID = document.getElementById('studentID').value;
    var program = document.getElementById('program').value;
    var companyInfo = document.getElementById('companyInfo').value;
    var placementDate = document.getElementById('placementDate').value;
    var endDate = document.getElementById('endDate').value;
    var assessmentOptions = document.querySelectorAll('input[name="overallAssessment"]:checked');
    var assessmentValues = Array.from(assessmentOptions).map(option => option.value);

    var supervisorComments = document.getElementById('supervisorComments').value;
    var improvementRecommendation = document.getElementById('improvementRecommendation').value;

    console.log('Student Name:', studentName);
    console.log('Student ID:', studentID);
    console.log('Program:', program);
    console.log('Name and Address of the Company:', companyInfo);
    console.log('Placement Date:', placementDate);
    console.log('End Date:', endDate);
    console.log('Overall Training Assessment:', assessmentValues);
    console.log('Company Industrial Supervisor’s Comments:', supervisorComments);
    console.log('Recommendation for Improvement:', improvementRecommendation);

    document.getElementById('evaluationForm').reset();
});
