# Script Listing

## Next Available Number: 00008, 00009, 00010, 00011, 00021, 00072

| Number | File | Description | Folder |
|-------:|:-----|:------------|:-------|
| 00001 | je_med_reset_am | Reset the bp medicine flag for the input_boolean.je_medicine to off | routines/je_medicine |
| 00002 | je_med_remind_am| Send the morning reminder to take BP medicine | routines/je_medicine |
| 00003 | je_med_later | User choose to remind later, wait... | routines/je_medicine |
| 00004 | je_med_taken | User said they took the medicine; set boolean_input.bp_medicine to on | routintes/bp_medicine |
| 00005 | bedtime | Webhook from IFTTT with payload from Withings Sleep indicating if user is in bed; sets input_boolean.john_bed | routines/john_bed |
| 00006 | door_opened_not_home | Front door, back door, or garage door was opened but nobody is home | doors |
| 00007 | door_open_w_hvac | Front door, back door, or garage door left open for more than 5 minutes while HVAC is running and outside temperature is more than 5 degrees than the HVAC setting | door |
| 00008 |  |  |  |
| 00009 |  |  |  |
| 00010 |  |  |  |
| 00011 |  |  |  |
| 00012 | arrive_night | Arrive home at night | doors |
| 00013 | mf_med_reset_am | Reset the bp medicine flag for the input_boolean.mf_medicine to off | routines/mf_medicine |
| 00014 | mf_med_remind_am | Send the AM reminder to take Metformin | routines/mf_medicine |
| 00015 | mf_med_later | User choose to remind later, wait... | routines/mf_medicine |
| 00016 | mf_med_taken | User said they took the metformin; set boolean_input.mf_medicine to on | routintes/mf_medicine |
| 00017 | mf_med_reset_pm | Reset the bp medicine flag for the input_boolean.mf_medicine to off | routines/mf_medicine |
| 00018 | mf_med_remind_pm | Send the PM reminder to take Metformin | routines/mf_medicine |
| 00019 | power_reset | Reset the total power meters on the zwave power meter | statistics |
| 00020 | stairwell_motion | Motion in stairwell, activate lights | motion |
| 00021 |  |  |  |
| 00022 | laundry_active | Washing machine is in use and using electricity | routines/laundry |
| 00023 | laundry_done | Washing machine is not in use and not using electricity | routines/laundry |
| 00024 | restart | Restart Home-Assistant | maintenance |
| 00025 | ikea | Restart IKEA integration | maintenance |
| 00026 | camera_lights_on | Turn on Elgato Ring Light when MBP Camera is on | work |
| 00027 | camera_lights_off | Turn off Elgato Ring Light when MBP Camera is off | work |
| 00029 | dryer_active | Dryer is in use and using electricity | routines/laundry |
| 00030 | dryer_done | Dryer is not in use and not using electricity | routines/laundry |
| 00031 | finance | Update stock tickers from Yahoo! finance | statistics |
| 00032 | bathroom_motion | Turn on the bathroom lights automatically based on time of day | motion |
| 00033 | laundry_queue | Remind everyone that there is wet laundry in the wash | routines/laundry |
| 00034 | sink_bright | Bathroom Remote Bright pressed | lights/bathroom |
| 00035 | sink_bright_long | Bathroom Remote Bright long pressed | lights/bathroom |
| 00036 | sink_dim | Bathroom Remote Dim pressed | lights/bathroom |
| 00037 | sink_dim_long | Bathroom Remote Dim long pressed | lights/bathroom |
| 00038 | sink_left | Bathroom Remote Left pressed | lights/bathroom |
| 00039 | sink_left_long | Bathroom Remote Left long pressed | lights/bathroom |
| 00040 | sink_onoff | Bathroom Remote on/off pressed | lights/bathroom |
| 00041 | sink_onoff_long | Bathroom Remote on/off long pressed | lights/bathroom |
| 00042 | sink_right | Bathroom Remote Right pressed | lights/bathroom |
| 00043 | sink_right_long | Bathroom Remote Right long pressed | lights/bathroom |
| 00044 | bp_med_counter_reset | IKEA on-off long press | routines/bp_medicine |
| 00045 | bathroom_motion_pause | IKEA on-off short press | motion |
| 00046 | ulanzi_weather | Update Ulanzi Clock with current weather information | statistics |
| 00047 | je_med_test | User said they took the medicine; decrement counter; notify if prescription is low | routines/je_medicine |
| 00048 | je_shopping | Alert JE when entering a store and there are items on the shopping list | routines/shopping |
| 00049 | rb_shopping | Alert RB when entering a store and there are items on the shopping list | routines/shopping |
| 00050 | smoke_warning | Alert JE and RB that smoke is present in the house | security |
| 00051 | smoke_warning | Alert JE and RB that smoke is present in the house | security |
| 00052 | ulanzi_recharge_start | Begin chargeing session for Ulanzi Clock | maintenance |
| 00053 | ulanzi_recharge_stop | End chargeing session for Ulanzi Clock | maintenance |
| 00054 | ulanzi_rain | Update Ulanzi Clock with rain informaiotn from Netatmo | statistics |
| 00055 | ulanzi_display_off | Turn off the Ulanzi Display | maintenance |
| 00056 | ulanzi_display_on | Turn off the Ulanzi Display | maintenance |
| 00057 | fire_recharge_start | Begin chargeing session for Kindle Fire Tablet | maintenance |
| 00058 | fire_recharge_stop | End chargeing session for Kindle Fire Tablet | maintenance |
| 00059 | robert_home | Welcome Robert Home | routines/greetings |
| 00060 | john_home | Welcome John Home | routines/greetings |
| 00061 | sporting_score | Flash lights for Sporting KC Score |statistics |
| 00062 | network_down | Update Awtrix Display with network download speed |statistics |
| 00063 | network_up | Update Awtrix Display with network upload speed |statistics |
| 00064 | je_med_reset_pm | Reset the bp medicine flag for the input_boolean.je_medicine to off | routines/je_medicine |
| 00065 | je_med_remind_pm| Send the evening reminder to take BP medicine | routines/je_medicine |
| 00066 | finance_stock_ticker | Display changed stock prices on AWTRIX | routines/statistics |
| 00067 | ulanzi_no_rain | Update the total rain message on AWTRIX and turn off overlay | routines/statistics |
| 00068 | instagram_followers | Display Instagram followers on AWTRIX | routines/statistics |
| 00069 | je_pressure | Display BP Numbers on AWTRIX | routines/je_health |
| 00070 | je_weight | Display Weight on AWTRIX | routines/je_health |
| 00071 | je_hide_health | Remove display of JE Health data on AWTRIX | routines/je_health |
