import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './MainScreenStyle'

const MainScreen = () => {
  const [value, setValue] = useState('0');
  const [bracketOpen, setBracketOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const handlePress = (val) => {
    if (val === 'AC') {
      setValue('0');
    } else if (val === '=') {
      try {
        if (
          (value.match(/\(/g) || []).length ===
          (value.match(/\)/g) || []).length
        ) {
          // Save the calculation to history
          const calculation = {
            expression: value,
            result: eval(value.replace('()', '(0)').slice(0, -1)),
          };
          setHistory((prevHistory) => [...prevHistory, calculation]);

          // Update the display
          setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`);
        }
      } catch (e) {
        setValue('Format Error');
      }
    } else if (val === 'back') {
      setValue(value.slice(0, -1));
    } else if (val === '()') {
      if (value === '0') {
        setValue('(');
        setBracketOpen(true);
      } else if (
        value.slice(-1) === '+' ||
        value.slice(-1) === '-' ||
        value.slice(-1) === '*' ||
        value.slice(-1) === '/'
      ) {
        setValue(value + '(');
        setBracketOpen(true);
      } else {
        if (bracketOpen === true) {
          setValue(value + ')');
          setBracketOpen(false);
        } else {
          setValue(value + '(');
          setBracketOpen(true);
        }
      }
    } else {
      if (value === '0') {
        if (
          val === '+' ||
          val === '-' ||
          val === '*' ||
          val === '/' ||
          val === '.' ||
          val === '%'
        ) {
          setValue(value + val);
        } else {
          setValue(val);
        }
      } else if (isNaN(val)) {
        if (
          value.slice(-1) === '+' ||
          value.slice(-1) === '-' ||
          value.slice(-1) === '*' ||
          value.slice(-1) === '/' ||
          value.slice(-1) === '.' ||
          value.slice(-1) === '%'
        ) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
      } else if (!isNaN(val)) {
        setValue(value + val);
      }
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <View style={styles.main_screen}>
      <ScrollView
        style={styles.main_screen__display}
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({ animated: true })
        }
      >
        <Text style={styles.main_screen__display_text}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </ScrollView>

      {/* Clock Icon Button */}
      <TouchableOpacity onPress={toggleHistory} style={styles.historyButton}>
        <Icon name="clock-o" size={30} color="#121212" style={{ marginLeft: 12 }} />
      </TouchableOpacity>

      {/* History Panel */}
      {showHistory && (
        <View style={styles.historyPanel}>
          <Text style={styles.historyHeaderText}>History</Text>
          <ScrollView>
            {history.map((calculation, index) => (
              <View key={index} style={styles.historyItem}>
                <Text>{calculation.expression}</Text>
                <Text>{`= ${calculation.result}`}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

<View style={styles.main_screen__keypad}>
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={() => handlePress('AC')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>AC</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('()')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>( )</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('%')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>%</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('/')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>/</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={() => handlePress('7')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('8')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('9')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('*')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>*</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={() => handlePress('4')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>4</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('5')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>5</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('6')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>6</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('-')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>-</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={() => handlePress('1')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>1</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('2')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>2</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('3')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>3</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('+')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>+</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={() => handlePress('0')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>0</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('.')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>.</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('back')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>&lt;</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('=')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default MainScreen;



