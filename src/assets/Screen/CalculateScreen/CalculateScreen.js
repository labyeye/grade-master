import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const CalculateScreen = () => {
    const maxSubjects = 5; // You mentioned 5 subjects, so updating the maxSubjects
    const [subjects, setSubjects] = useState(Array.from({ length: maxSubjects }, () => ({ name: "", grade: "", credits: "" })));
    const [cgpa, setCGPA] = useState(null);
    const handleSubjectChange = (index, field, value) => {
        const newSubjects = [...subjects];
        newSubjects[index][field] = value;
        setSubjects(newSubjects);
    };
    const getGradeValue = (grade) => {
        // Define your grade values here
        switch (grade) {
            case "O" || "o":
                return 10;
            case "A+" || "a+":
                return 9.18;
            case "A" || "a":
                return 8.33;

            default:
                return 0;
        }
    };
    const calculateCGPA = () => {
        const totalCredits = subjects.reduce((sum, subject) => sum + parseFloat(subject.credits || 0), 0);
        const weightedGradePoints = subjects.reduce((sum, subject) => {
            const gradeValue = getGradeValue(subject.grade);
            return sum + gradeValue * parseFloat(subject.credits || 0);
        }, 0);

        const calculatedCGPA = totalCredits !== 0 ? weightedGradePoints / totalCredits : 0;
        setCGPA(calculatedCGPA.toFixed(2)); // Round to two decimal places
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#efefd0', justifyContent: 'center', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <View style={{marginTop:20}}>
                <Text style={styles.text}>Calculator your CGPA</Text>
            </View>
            <View style={{ flexDirection: 'row', width: "100%", gap: 10, justifyContent: 'center',height:"60%"}}>
                <View style={{ width: "60%", gap: 10 }}>
                    <Text>Enter Subject Name</Text>
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(0, "grade", value)} placeholder="Enter Subject 1" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(1, "grade", value)} placeholder="Enter Subject 2" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(2, "grade", value)} placeholder="Enter Subject 3" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(3, "grade", value)} placeholder="Enter Subject 4" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(4, "grade", value)} placeholder="Enter Subject 5" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(5, "grade", value)} placeholder="Enter Subject 6" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(6, "grade", value)} placeholder="Enter Subject 7" />
                    <TextInput style={styles.textinput} onChangeText={(value) => handleSubjectChange(7, "grade", value)} placeholder="Enter Subject 8" />
                </View>
                <View style={{ width: "15%", gap: 10 }}>
                    <Text>Grade</Text>
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(0, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(1, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(2, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(3, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(4, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(5, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(6, "grade", value)} />
                    <TextInput style={styles.textinput1} onChangeText={(value) => handleSubjectChange(7, "grade", value)} />

                </View>
                <View style={{ width: "12%", gap: 10 }}>
                    <Text>Credit</Text>
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(0, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(1, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(2, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(3, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(4, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(5, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(6, "credits", value)} />
                    <TextInput style={styles.textinput2} onChangeText={(value) => handleSubjectChange(6, "credits", value)} />

                </View>
            </View>
            <TouchableOpacity style={styles.but} onPress={calculateCGPA}>
                <Text style={styles.button}>Calculate</Text>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold'}}>Your CGPA is {cgpa}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: "#004e89",
        fontWeight:'bold',
        alignSelf: "center",
    },
    textinput: {
        height: "9%",
        width: "100%",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 5,
        backgroundColor: '#f7c59f'
    },
    textinput1: {
        height: "9%",
        width: "100%",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 20,
        backgroundColor: '#f7c59f'
    },
    textinput2: {
        height: "9%",
        width: "100%",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 15,
        backgroundColor: '#f7c59f'
    },
    but: {
        backgroundColor: "#004e89",
        padding: 10,
        width: "70%",
        borderRadius: 50,
        alignItems: 'center',
    },
    button: {
        color: "white"
    },
})
export default CalculateScreen;