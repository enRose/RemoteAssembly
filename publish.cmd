nuget restore
msbuild CoreBot.sln -p:DeployOnBuild=true -p:PublishProfile=.\remoteassembly-Web-Deploy.pubxml -p:Password=urJKPgf6zTyjvteX68MMPuWGXTCjM1oJonsus727ejE3w1DSu7bBtCd0kb0R

