/* WebChucK Lite Demo Code */
0 => global int MY_INT;
0 => global float MY_FLOAT;

SinOsc osc => dac;
osc.freq(440);

while (true)
{
    // Print current values 
    <<< "WebChucK: myInt", MY_INT >>>;
    <<< "WebChucK: myFloat", MY_FLOAT >>>;

    // Update values
    Math.random2(0, 100) => MY_INT;
    MY_FLOAT => osc.gain;
    440 + MY_INT => osc.freq;
    0.5::second => now;
}