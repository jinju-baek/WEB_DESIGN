var joinValidate = {
	// 결과 메시지 출력시 사용하는 text
	
	// JSON
	resultCode : {
		// 공통
		empty_val : {
			code : 1,
			desc : '필수 정보입니다.'
		},
		space_length_val : {
			code : 2,
			desc : '공백없이 입력해주세요.'
		},
		// ID
		success_id : {
			code : 0,
			desc : '멋진 아이디네요:)'
		},
		specialStr_id : {
			code : 3,
			desc : '특수문자는 (-), (_), (@), (.)만 이용 가능합니다.'
		},
		invalid_id : {
			code : 4,
			desc : '아이디는 영문 소문자, 숫자, 특수기호 일부만 사용할 수 있습니다.'
		},
		first_special_id : {
			 code : 5,
			 desc : '첫 글자는 특수문자를 이용하실 수 없습니다.' 
		},
		length_id : {
			code : 6,
			desc : '아이디는 5자 이상~20자 이하여야 합니다.'
		},
		overlap_id : {
			code : 7,
			desc : '이미 사용 중인 ID입니다.'
		}, 
		// pw
		success_pw : {
			code : 0,
			desc : '사용가능한 비밀번호입니다.'
		}, 
		invalid_pw : {
			code : 3,
			desc : '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.'
		},
		other_pw : {
			code : 4, 
			desc : '입력하신 비밀번호가 일치하지 않습니다.'
		},
		equal_pw : {
			code : 5,
			desc : '현재 비밀번호와 다르게 입력해주세요.'
		},
		// name
		success_name : {
			code : 0,
			desc : '멋진 이름이네요:)'
		},
		invalid_name : {
			code : 3,
			desc : '이름은 표준한글만 입력가능합니다.'
		},
		length_name : {
			code : 4,
			desc : '이름은 2자 이상 ~ 4자이하만 가능합니다.'
		},
		// phone
		success_phone : {
			code : 0,
			desc : '사용가능한 번호입니다.'
		},
		invalid_phone : {
			code : 3,
			desc : '휴대폰 번호가 유효하지 않습니다.'
		}, 
		length_phone : {
			code : 4,
			desc : '(-)없이 10, 11자로 입력해주세요.'
		}, 
		number_phone : {
			code : 5, 
			desc : '숫자만 입력해주세요.'
		},
		// email
		success_email : {
			code : 0,
			desc : '사용가능한 이메일입니다.'
		}, 
		invalid_email : {
			code : 3,
			desc : '올바른 이메일을 입력해주세요.'
		}
	},

	// 아이디 유효성 체크
	checkId : function(id) {		
		// 정규식
		var regEmpty = /\s/g; // 공백문자
		var regEtc = /[~`!#$%^&*()+=\|\\\{\}\[\]:";'<>,?//]/g; // 특수문자
		var regid = /[^a-z0-9-_.@]+/g; // 올바른 아이디 형식}

		// 1. 값이 있는지 없는지 체크(spacebar이 들어올 경우를 대비해 length(spacebar는 length=0)도 비교)
		if(id == '' || id.length == 0){
			return this.resultCode.empty_val;
		} else if(id.match(regEmpty)){ // 2. 값 사이에 공백이 있는지 체크
			return this.resultCode.space_length_val;
		} else if(id.match(regEtc)){ // 3. 특수문자 체크(-, _, @, .만 가능)
			return this.resultCode.specialStr_id;
		} else if(id.match(regid)){ // 4. 아이디 정규식 체크
			return this.resultCode.invalid_id;
		} else if(id.charAt(0) == '-' || id.charAt(0) == '_' || id.charAt(0) == '@' || id.charAt(0) == '.'){ // 5. 첫글자로 특수문자 사용불가
			return this.resultCode.first_special_id;
		} else if(id.length < 5 || id.length >20){ // 6. 길이(5~20자 이내)
			return this.resultCode.length_id;
		} else{
			return this.resultCode.success_id;
		}
	},

	// 패스워드 유효성 체크
	checkPw : function(pw){
		var regEmpty = /\s/g; // 공백문자
		var regPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // ^ = 안의 값이 들어오면 true

		if(pw == '' || pw.length == 0){ // 1. 값이 있는지 체크
			return this.resultCode.empty_val;
		} else if(pw.match(regEmpty)){ // 2. 공백값이 있는지 체크
			return this.resultCode.space_length_val;
		} else if(!pw.match(regPw)){ // 3. 유효한 비밀번호인지 체크
			return this.resultCode.invalid_pw;
		} else{
			return this.resultCode.success_pw;
		}
	}
}