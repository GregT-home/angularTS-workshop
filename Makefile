TSC = tsc
APP = dev
SOURCES = dev.ts
TRANSPILED = dev.js patient_model.js detail_model.js

run: $(TRANSPILED)
	node $(APP)

%.js : %.ts
	$(TSC) $(TSFLAGS) $<

clean:
	rm $(TRANSPILED)