# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := sqlite3
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=sqlite3' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-D_REENTRANT=1' \
	'-DSQLITE_THREADSAFE=1' \
	'-DHAVE_USLEEP=1' \
	'-DSQLITE_ENABLE_FTS3' \
	'-DSQLITE_ENABLE_FTS4' \
	'-DSQLITE_ENABLE_FTS5' \
	'-DSQLITE_ENABLE_JSON1' \
	'-DSQLITE_ENABLE_RTREE' \
	'-DSQLITE_ENABLE_DBSTAT_VTAB=1' \
	'-DSQLITE_ENABLE_MATH_FUNCTIONS' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++14 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/include/node \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/src \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/openssl/config \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/openssl/openssl/include \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/uv/include \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/zlib \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/v8/include \
	-I$(obj)/gen/sqlite-autoconf-3360000

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=sqlite3' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-D_REENTRANT=1' \
	'-DSQLITE_THREADSAFE=1' \
	'-DHAVE_USLEEP=1' \
	'-DSQLITE_ENABLE_FTS3' \
	'-DSQLITE_ENABLE_FTS4' \
	'-DSQLITE_ENABLE_FTS5' \
	'-DSQLITE_ENABLE_JSON1' \
	'-DSQLITE_ENABLE_RTREE' \
	'-DSQLITE_ENABLE_DBSTAT_VTAB=1' \
	'-DSQLITE_ENABLE_MATH_FUNCTIONS' \
	'-DNDEBUG'

# Flags passed to all source files.
CFLAGS_Release := \
	-O3 \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++14 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fvisibility-inlines-hidden \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/include/node \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/src \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/openssl/config \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/openssl/openssl/include \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/uv/include \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/zlib \
	-I/Users/sanjaykanwar/Library/Caches/node-gyp/16.13.1/deps/v8/include \
	-I$(obj)/gen/sqlite-autoconf-3360000

OBJS := \
	$(obj).target/$(TARGET)/gen/sqlite-autoconf-3360000/sqlite3.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# Make sure our dependencies are built before any of us.
$(OBJS): | $(obj).target/deps/action_before_build.stamp

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug :=

LDFLAGS_Release := \
	-Wl,-dead_strip \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release :=

LIBS :=

$(builddir)/sqlite3.a: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/sqlite3.a: LIBS := $(LIBS)
$(builddir)/sqlite3.a: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/sqlite3.a: TOOLSET := $(TOOLSET)
$(builddir)/sqlite3.a: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,alink)

all_deps += $(builddir)/sqlite3.a
# Add target alias
.PHONY: sqlite3
sqlite3: $(builddir)/sqlite3.a

# Add target alias to "all" target.
.PHONY: all
all: sqlite3

# Add target alias
.PHONY: sqlite3
sqlite3: $(builddir)/sqlite3.a

# Short alias for building this static library.
.PHONY: sqlite3.a
sqlite3.a: $(builddir)/sqlite3.a

# Add static library to "all" target.
.PHONY: all
all: $(builddir)/sqlite3.a

