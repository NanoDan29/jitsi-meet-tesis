const { spawn } = require('child_process')

const docker = spawn('docker-compose', ["exec", "prosody", "/bin/bash"]);

docker.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

docker.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

docker.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});