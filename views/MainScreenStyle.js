module.exports = {
  main_screen: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  // Display results
  main_screen__display: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    marginBottom: 10,
    padding: 10,
  },
  main_screen__display_text: {
    fontSize: 50,
    textAlign: 'right',
  },

  main_screen__keypad: {
    width: '100%',
    height: '70%',
    display: 'flex',
    marginBottom: 10,
  },
  main_screen__keypad_row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btn_outer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg_button: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  btn1_outer: {
    width: 80,
    height: 80,
    backgroundColor: 'orange',
    borderRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg1_button: {
    backgroundColor: 'orange',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  btn2_outer: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg2_button: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },


  historyButton: {
    // position:'absolute',
    left: 150,
    // right: 100
  },

  historyPanel: {
    position: 'absolute',
    top: 250,
    bottom: 70,
    right: 0,
    left: 10,
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    Height: 500,
    width: '96%'
  },

  historyHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  historyItem: {
    marginBottom: 5,
  },
};
