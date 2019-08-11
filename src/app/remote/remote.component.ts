import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

  messageTxt = '';

  lang = 'fi';
  timing = {
    date: '00.00.0000',
    time: '00:00:00'
  };

  messages = [
    {
      date: '12:00:00',
      lang: 'en',
      value: ['This is a test message with ', '[action]'],
      command: 'steps'
    }
  ];

  moves = [
    "none",
    "987_J2_LoobyLoo",
    "888_ML_MLJoking_03",
    "775_Live_U031",
    "667_P4_Crycry",
    "888_ML_Ruarrognat_22",
    "006_P5_Wipe",
    "000_P4_GroupMoveB",
    "775_Phonics_T1050",
    "888_ML_Pikathirsty_14",
    "888_ML_Forgive_23",
    "775_Phonics_Y1020",
    "888_ML_LRHandUp_19",
    "775_Phonics_X1020",
    "888_ML_Milawavelh_23",
    "888_ML_Zombie_22",
    "777_H5L3_Dialogue070",
    "775_Live_C050",
    "888_ML_Struggle_10",
    "666_SA_Discover",
    "775_Live_OPSong",
    "888_ML_Kisshug_07",
    "888_ML_Giveflower_13",
    "775_Phonics_X1030",
    "888_ML_Raisehandwalk_17",
    "987_P4_BlankA",
    "666_EM_IntimidateB",
    "777_H2L2_Song",
    "775_Phonics_Q0040",
    "777_H2L2_Dialogue010",
    "775_Live_W010",
    "666_DA_Washhair",
    "mibo_anim_a06_kc_v05",
    "mibo_anim_a01_kc_v05",
    "001_A2_Grimace",
    "987_P4_BlankB",
    "888_ML_HsOut_03",
    "005_P4_Tutorial905",
    "777_H6L1_Dialogue050",
    "775_Phonics_O0040",
    "777_H4L3_Dialogue050",
    "666_RE_Hello",
    "888_ML_Awkwardcough_06",
    "000_P4_FollowF",
    "888_ML_Quenhead_20",
    "888_ML_Noooo_21",
    "888_ML_Farmerwalk_16",
    "666_TA_LookDnU",
    "YM_Magicware_0458_n_interaction4go_020",
    "YM_NT10_3_0045_n_headdownupset_060",
    "003_P4_Tutorial905",
    "001_J4_IOTOn",
    "666_RE_Bye",
    "888_ML_Ruwant_22",
    "tmp",
    "777_H3L2_DialogueAll",
    "YM_Magicware_4_0052_n_handsuplefthandnod_040",
    "888_ML_Frogdancela_14",
    "775_Phonics_U0030",
    "775_Live_Y030",
    "775_Live_N030",
    "000_J1_SHand_B1",
    "YM_Magicware_4_0007_n_swingpot_025",
    "888_ML_Djoharub_04",
    "888_ML_Klhp_01",
    "775_Phonics_A0010",
    "666_PE_DJ",
    "000_P4_GroupMoveD",
    "YM_NT10_2_2_0001_y_lookdownshock_060",
    "006_P4_Tutorial804",
    "667_P4_Sweep",
    "775_Live_G010",
    "987_J2_NewYear",
    "YM_ForLove_4_0118_n_handandhand_025",
    "888_ML_Stepmomraiselh_03",
    "888_ML_Bhbackwave_05",
    "666_LE_ListenSong",
    "888_ML_Milawitch_19",
    "006_P4_Tutorial807",
    "666_SP_Karate",
    "777_H4L2_Dialogue050",
    "888_ML_Cutpotato_03",
    "000_P4_RPSTie",
    "775_Phonics_F1010",
    "888_ML_MLHandsUp_19",
    "888_ML_Evguitar_09",
    "775_Live_J020",
    "775_Phonics_P0020",
    "888_ML_Raisewavehand_01",
    "888_ML_Thinkstupid_07",
    "888_ML_TellYou_22",
    "666_SA_Toothache",
    "775_Live_F030",
    "003_P4_Tutorial802",
    "775_Phonics_M1030",
    "888_ML_Quencry_20",
    "777_H1L2_Dialogue050",
    "888_ML_Animalsya_16",
    "888_ML_KneelSor_18",
    "888_ML_FarmerWaist_07",
    "001_P4_Tutorial606",
    "666_TA_Fault",
    "001_P4_Tutorial506",
    "001_J3_WBPetted",
    "888_ML_Whatereat_19",
    "666_BA_RHandL01",
    "777_H2L3_Dialogue050",
    "666_PE_Harmonica",
    "888_ML_Laughingat_10",
    "666_RE_Embrace",
    "775_Phonics_X0030",
    "775_Phonics_K1040",
    "888_ML_RubHands_11",
    "987_J2_EnglishDemo",
    "YM_ForLove_0246_n_lefthandup_015",
    "888_ML_Hug_24",
    "775_Phonics_J1050",
    "888_ML_Milaoverheard_04",
    "888_ML_Angry_08",
    "888_ML_Raiselefthand_17",
    "YM_ForLove_0648_y_shrakmove_025",
    "000_J2_Newyear",
    "775_Phonics_G0010",
    "775_Live_C031",
    "YM_transfer_0548_y_please_020",
    "888_ML_Andywalk_04",
    "775_Live_B050",
    "987_J2_DemoDance01A",
    "888_ML_Milarimokon_02",
    "888_ML_Milagood_05",
    "888_ML_Raisehhug_01",
    "000_D3_Eat",
    "666_PE_PlayGuitar",
    "YM_redflower_0249_n_Pushword_020",
    "775_Live_X050",
    "667_P4_Magnifier",
    "888_ML_Bhpointr_08",
    "888_ML_Milascare_03",
    "775_Phonics_H1050",
    "888_ML_Disco_20",
    "001_P4_Tutorial212",
    "987_J2_SayHello",
    "YM_transfer_0214_n_Mibothink_030",
    "667_P4_Lionroar",
    "888_ML_Milasee_05",
    "YM_Magicware_5_0113_n_righthandstayupheadright_040",
    "777_H6L1_Dialogue010",
    "666_EM_Happy01",
    "888_ML_RYoHo_17",
    "YM_transfer_0643_n_lefthandup_020",
    "YM_redflower_0000_n_wave_04",
    "775_Phonics_X0040",
    "006_P4_Tutorial801",
    "888_ML_Farmerangry_07",
    "775_Live_B040",
    "666_EM_Sad01",
    "777_H3L4_Dialogue010",
    "888_ML_CowMurmur_14",
    "000_P4_BodyRotate192",
    "888_ML_Cheerwave_11",
    "666_EM_Disdain",
    "888_ML_MLLBye_02",
    "YM_Magicware_0224_n_lefthand_050",
    "888_ML_Froglove_14",
    "888_ML_Openmlhand_21",
    "775_Live_Z020",
    "888_ML_Takerope_21",
    "YM_redflower_0240_n_dancewatering_035",
    "666_SP_Bowling",
    "888_ML_Milaflatlyh_10",
    "777_H3L4_DialogueAll",
    "888_ML_Ohhi_15",
    "775_Live_X030",
    "888_ML_Milahelpless_23",
    "888_ML_Trembling1_01",
    "777_H2L1_Dialogue060",
    "001_P4_Tutorial904",
    "005_P5_Wipe",
    "888_ML_Janescolded_23",
    "888_ML_Djohashh_04",
    "000_J3_MonkeyYellL",
    "775_Phonics_Q1040",
    "888_ML_LTakeCake_24",
    "888_ML_Sheephifive_09",
    "775_Live_K020",
    "666_DA_Drink",
    "775_Live_B020",
    "888_ML_HandsW_03",
    "001_P4_TurnOff",
    "775_Phonics_U0040",
    "888_ML_Cercer_20",
    "777_H3L4_Dialogue050",
    "888_ML_Rhandup_08",
    "775_Phonics_I1020",
    "667_P4_Hammer",
    "YM_Magicware_0322_n_clapclap_035",
    "001_P4_Tutorial701",
    "888_ML_Bullfight_02",
    "666_PE_Shrink",
    "YM_NT10_0805_n_interaction41_010",
    "888_ML_Piboulelookup_05",
    "001_P4_Tutorial010",
    "888_ML_Lunacurse_18",
    "888_ML_Tellmestory_07",
    "004_P1_Glowing",
    "YM_redflower_0000_n_MiboYESYES_015",
    "775_Phonics_C1050",
    "775_Live_L031",
    "000_P5_Dormanc"
  ];

  faces: [
    "happy",
    "sad",
    "neutral",
    "laughing",
    "crying"
  ];

  showMoves = false;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  addAction(type, id){
    this.messageTxt = this.messageTxt + ' [' + type + ':' + id + ']';
  }

  play(msg, lang){
    // parse message
    // find poses
    let steps = [];
    let round1 = msg.split(/\[(.*?)\]/);
    console.log(round1);
    round1.forEach(el => {
      let split = el.split(':');
      if(split.length > 1){
        steps.push(split);
      }
      else{
        steps.push(split);
      }
      console.log(split);
    });
    console.log(steps);

    let message = {
      date: this.timing.date,
      time: this.timing.time,
      lang: lang,
      value: steps,
      command: 'steps'
    };
    this.messages.push(message);

    let Socket = (<any>window).SimpleWebsocket;
    let socket = new Socket('ws://192.168.1.13:1337');
    socket.on('connect', ()=>{
      console.log('Socket is connected!');
      socket.send(JSON.stringify(message));
    });

    socket.on('data', function (data) {
      console.log('server message: ' + data);
    });

  }

  open(content) {
    this.modalService.open(content);
  }

}
